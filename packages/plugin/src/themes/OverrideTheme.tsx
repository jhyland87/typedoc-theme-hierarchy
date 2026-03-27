import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { DefaultTheme, type PageEvent, type Reflection, type Renderer, RendererEvent } from 'typedoc';

import { OverrideThemeContext } from './OverrideThemeContext.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class OverrideTheme extends DefaultTheme {
	public constructor(renderer: Renderer) {
		super(renderer);

		this.owner.on(RendererEvent.END, event => {
			fse.copySync(
				path.join(__dirname, `assets`),
				path.join(event.outputDirectory, `assets`),
			);
		});
	}

	public override getRenderContext(page: PageEvent<Reflection>): OverrideThemeContext {
		return new OverrideThemeContext(this.router, this, page, this.application.options);
	}
}
