function getContg(){

	if(window.img_ad && window.img_ad.length>0){
		var html = []
		for(var i=0;i<img_ad.length;i++){
			html.push('<div class="item">'+img_ad[i]+'</div>')
		}
		$('header').after('<div class="wrap tphfimg listtj"><div class="gga">'+html.join('')+'</div></div>')
	}

	if(window.item_link && window.item_link.length>0){
		var item_link_str = [], link_len = item_link.length
		var idx = Math.floor((Math.random()*link_len))
		item_link_str.push('<li class="listtj listgc">'+item_link[idx]+'<i class="ac">白羊</i></li>')
		item_link.splice(idx, 1)
		for(var i=0;i<item_link.length;i++){
			item_link_str.push('<li class="listtj listgc">'+item_link[i]+'<i class="ac">广告</i></li>')
		}
		$(".list").eq(0).find('ul').prepend(item_link_str.join(''))
	}

	if(window.item_ad && item_ad.length>0){	
		var item_ad1_str = []
		for(var i=0;i<item_ad.length;i++){
			item_ad1_str.push('<li class="listgc">'+item_ad[i]+'<i class="ac">邮箱</i></li>')
		}
		$(".list").eq(0).before("<div class='list listtg listtj'><ul>"+item_ad1_str.join('')+"</ul></div>")	
	}
		
	if(window.nav_ad && window.nav_ad.length>0){			
		$('.listcc').eq(0).find('.title').append(nav_ad.join(''))
	}
	
	if(window.fxlfcn && fxlfcn.length>0){
		let html = []
		fxlfcn.forEach(function(c){
			html.push('<div>'+c+'</div>')
		})
		$('body').append('<div class="fxlgtx listtj">'+html.join('')+'</div>')
	}
	if(window.fxrfcn && fxrfcn.length>0){
		let html = []
		fxrfcn.forEach(function(c){
			html.push('<div>'+c+'</div>')
		})
		$('body').append('<div class="fxrgtx listtj">'+html.join('')+'</div>')
	}
	if(window.contact && contact.length>0){
		let html = []
		contact.forEach(function(c){
			html.push(c)
		})
		$('.copyright .wrap').append(html.join(''))
	}

	$('.mupg').show()
	appendTL()
}

setTimeout(getContg, 1000*0)

if($('body').data('class')){
	$('.nav a').each(function(){
		if($(this).data('type') === $('body').data('class')){
			$(this).addClass('curr')
		}
	})
}
else{
	$('.nav a.hm').addClass('curr')
}

$('.mupg').click(function () {
	let that = $(this)
	if(that.hasClass('mupg_sn')){
		that.removeClass('mupg_sn')
		getContg()
	}
	else{
		that.addClass('mupg_sn')
		$('.listtj').remove()
		appendTL()
	}
})

appendTL()

function appendTL(){
	$('.libc').remove()
	$('.list').each(function (c) {
		let that = $(this), item_len = that.find('li').length
		for (var i0 = item_len % 2; i0 && i0 !== 2; i0++) {
			that.find('ul').append('<li class="libc"><a class="bc"></a></li>');
		}
	})
}

function randomsort(a, b) {
   return Math.random()>.5 ? -1 : 1;
}
