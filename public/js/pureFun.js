YUI().use('node', 'transition', function(Y) {
	
	var divs = Y.all('.pureFun > div');
		
	divs.each(function(){
		
		this.on('mouseover', function(){
			this.get('children').item(1).transition({
				delay: 0,
				duration: 0.5,
				ease: 'ease-in',
				bottom: '0px'
			});
		});
		
		this.on('mouseout', function(){
			this.get('children').item(1).transition({
				delay: 0,
				duration: 1.0,
				ease: 'ease-in',
				bottom: '-100px'
			});
		});
		
	});
	
});