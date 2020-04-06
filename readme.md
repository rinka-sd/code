页面：

	正弦波：
	https://rinka-sd.github.io/code/additional/sineWave.html
	备注：js动画，虽然用了查找表减少Math.sin()调用，但是依然占资源

	keyboard：
	https://rinka-sd.github.io/code/keyboard/keyboard.html
	备注：没啥好备注的，就是简单的功能，设置快捷键，按下快捷键进入网址

	Liu YiFei
	https://rinka-sd.github.io/code/web01/html/Photos.html
	备注：contact中的简单调用ajax返回指定页面submit.html中的<article>部分调用不被支持
	背景图片加载慢于页面其它图片（背景图片的设置在外部样式表中，而其它图片src直接在html中设置了）

	基于hexo的简单博客页面
	https://rinka-sd.github.io
	备注：没啥好备注的，跟着教程一步步做出来的
	补充：
		当添加新的博客时，需要hexo new "新的博客名",然后 hexo g -d 更新
		在此处，如果是直接把md文件加入到对应的存放文件夹中，在相应的push之后
		仍需hexo new "新的博客名",然后 hexo g -d 更新（直接更新似乎没反应，原因暂时未知，所以需要新建博客来刷新？！）