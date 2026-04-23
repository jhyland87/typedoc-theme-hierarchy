import { JSX, type Reflection, ReflectionKind, translateTagName } from 'typedoc';

import { type OverrideThemeContext } from '../themes/OverrideThemeContext.js';

const COLLAPSIBLE_TAGS = new Set(['@source']);

export const commentTags =
	(context: OverrideThemeContext) =>
	(props: Reflection): JSX.Element | undefined => {
		if (!props.comment) return;
		const comment = props.comment;

		const skipSave = comment.blockTags.map((tag) => tag.skipRendering);
		const skippedTags = context.options.getValue('notRenderedTags');
		const beforeTags = context.hook('comment.beforeTags', context, comment, props);
		const afterTags = context.hook('comment.afterTags', context, comment, props);

		const tags = props.kindOf(ReflectionKind.SomeSignature)
			? comment.blockTags.filter(
					(tag) => tag.tag !== '@returns' && !tag.skipRendering && !skippedTags.includes(tag.tag),
				)
			: comment.blockTags.filter(
					(tag) => !tag.skipRendering && !skippedTags.includes(tag.tag),
				);

		skipSave.forEach((skip, i) => {
			const tag = comment.blockTags[i];
			if (tag) tag.skipRendering = skip;
		});

		return (
			<>
				{beforeTags}
				<div class='tsd-comment tsd-typography'>
					{tags.map((item) => {
						const name = item.name
							? `${translateTagName(item.tag)}: ${item.name}`
							: translateTagName(item.tag);
						const anchor = context.slugger.slug(name);
						const body = <JSX.Raw html={context.markdown(item.content)} />;

						if (COLLAPSIBLE_TAGS.has(item.tag)) {
							return (
								<details class={`tsd-tag-${item.tag.substring(1)} tsd-tag--collapsible`} id={anchor}>
									<summary class='tsd-tag__summary'>
										<h4 class='tsd-anchor-link'>{name}</h4>
									</summary>
									<div class='tsd-tag--collapsible__content'>{body}</div>
								</details>
							);
						}

						return (
							<div class={`tsd-tag-${item.tag.substring(1)}`}>
								<h4 class='tsd-anchor-link' id={anchor}>
									{name}
								</h4>
								{body}
							</div>
						);
					})}
				</div>
				{afterTags}
			</>
		);
	};
