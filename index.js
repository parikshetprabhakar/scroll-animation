
var controller = new ScrollMagic.Controller();

		// build tween
		var tween1 = TweenMax.to("#target1", 1, {x:-500, ease: Linear.easeNone});
		var tween2 = TweenMax.to("#target2", 1, {x: 200, ease: Linear.easeNone});

		// build scene
		var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500, triggerHook:'onLeave', offset: 10})
						.setTween(tween1)
						.setPin("#trigger1", {pushFollowers: true})
						.addTo(controller);
		var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500, triggerHook:'onLeave', offset: 10})
						.setTween(tween2)
						.addTo(controller);