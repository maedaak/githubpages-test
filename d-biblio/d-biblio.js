enchant();

// ページが読み込まれたときに実行される関数
window.onload = function() {

  core = new Core(570, 570);
  core.fps = 16;

  core.preload('moon.png');

   core.onload = function() {

   	   var bg = new Sprite(570, 570);
   	   bg.image = core.assets['moon.png'];
   	   core.rootScene.addChild(bg);

   	   var label1 = new Label("図書館員アプリ開発本");
   	   label1.color = '#0000FF';
   	   label1.font =  "italic bold 30px 'HG正楷書体-PRO'";
   	   label1.x = 200;
   	   label1.y = 200;
   	   core.rootScene.addChild(label1);
   	   var count = 0;

   	   var label2 = new Label("前田朗著");
   	   label2.color = 'green';
   	   label2.font =  "30px 'HG正楷書体-PRO'";
   	   label2.x = 500;
   	   label2.y = 0;
   	   core.rootScene.addChild(label2);

    	   var label3 = new Label("刊行予定とかなし！");
   	   label3.color = 'red';
   	   label3.font =  "35px 'HG正楷書体-PRO'";
   	   label3.x = 100;
   	   label3.y = 500;

   	   this.addEventListener('enterframe', function() {
   	   	   if (count < 320) {
   	   	       // label1.x = (Math.sin(count / 180) * 100) + 200;
   	   	       // label1.y = (Math.cos(count / 180) * 100) + 200;
   	   	       label1.x = (Math.sin(count / 90) * 100) + 200;
   	   	       label1.y = (Math.cos(count / 90) * 100) + 200;
   	   	   }
   	   	   label2.x --;
   	   	   label2.y ++;
   	   	   label2.y ++;
   	   	   if (count > 120) {
   	   	       label2.tl.rotateBy(360,20);
   	   	       label2.tl.scaleTo(50,50,20);
   	   	       label2.tl.fadeOut(30);
   	   	       core.rootScene.addChild(label3);
   	   	       label3.tl.fadeIn(30);
   	   	   }
   	   	   count ++;
   	   });
   }

   core.start();

}
