var canvas = document.getElementById('my_canvas');
   				 canvas.width = 500;
    			 canvas.height =  154;
			var ctx = canvas.getContext('2d');

			var image_1 = load_image('assets/sky.jpg');
			var image_2 = load_image('assets/beach.png');

			function load_image(url) {
   			var image = new Image();
        		image.src = url;
       			image.onload = draw_image;
    		return image;
    
			}
			function draw_image(){
				ctx.drawImage(image_1,0,0);
                ctx.drawImage(image_2,0,0);
            }