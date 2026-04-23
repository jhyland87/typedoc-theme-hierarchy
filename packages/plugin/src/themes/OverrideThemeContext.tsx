import { DefaultThemeRenderContext, type JSX, type PageEvent, type Reflection } from 'typedoc';

import { commentTags } from '../partials/commentTags.js';
import { navigation } from '../partials/navigation.js';

export class OverrideThemeContext extends DefaultThemeRenderContext {
	override navigation = (context: PageEvent<Reflection>): JSX.Element => navigation(this)(context);
	override commentTags = (props: Reflection): JSX.Element | undefined =>
		commentTags(this)(props);
}
