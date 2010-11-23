////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (C) 2006 Adobe Macromedia Software LLC and its licensors.
//  All Rights Reserved. The following is Source Code and is subject to all
//  restrictions on such code as contained in the End User License Agreement
//  accompanying this product.
//
////////////////////////////////////////////////////////////////////////////////

package
{
	import mx.core.UIComponent;
	import flash.display.GradientType;
	import flash.display.SpreadMethod;
	import flash.display.InterpolationMethod;
	import flash.geom.Matrix;
	import mx.effects.Rotate;

	/** A UIComponent that is simply a colored circle.
	 * 
	 * @author Mark Shepherd
	 */
	public class Circle extends UIComponent
	{
		/** the color that this circle will be */
		public function set color(i: int): void {
			_color = i;
			
			// don't redraw immediately, because maybe the code that's calling us is
			// going to change several settings, and we don't want to redraw for each 
			// setting change. Instead, tell the flex framework that
			// we need to be redrawn; the framework will ensure that updateDisplayList
			// is invoked after all scripts have finished executing.
			invalidateDisplayList(); 
		}
		
		/** our current color setting. */
		private var _color: int;
		
		/** redraws the component, using our current color, height, and width settings.
		 *  This function is called whenever the flex framework decides it's time to redraw the component. */
		override protected function updateDisplayList(unscaledWidth:Number, unscaledHeight:Number):void {
			// We could simply do graphics.beginFill(_color) here, to get a solid color fill.
			// But instead, we'll use a gradient fill to get a simulated 3D effect.
			// TODO: tweak the gradient fill settings to get a better looking gradient
			graphics.clear();
			graphics.beginGradientFill(GradientType.RADIAL, [0xffffff, _color], [1, 1], [0, 127], 
				null, SpreadMethod.PAD, InterpolationMethod.RGB, 0.75);
			graphics.drawCircle(unscaledWidth / 2, unscaledHeight / 2, unscaledHeight / 2);
			graphics.endFill();
		}
	}
}