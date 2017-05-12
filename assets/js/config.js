var siteurl = "http://localhost/udocapp";
//var realsiteurl = "http://localhost/udoc";
var realsiteurl = "https://app.udochealth.com";

function gup(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function site_menus()
{
	var menu='';
	var pages='';
	var doc_uid=localStorage.getItem('doc_uid');
	if(typeof doc_uid!='undefined' && doc_uid!=null && doc_uid!='0'){
		menu+='<ul class="nav navbar-nav navbar-right welcomemenu" style="margin:0px 0 10px 0;"><li style="line-height:normal;">Welcome, '+localStorage.getItem('doc_fname')+' '+localStorage.getItem('doc_lname')+'! <a style="padding:0px; " href="logout.html?utype=doctor"><strong>(Logout) </strong></a></li></ul>';
	}
	var pat_uid=localStorage.getItem('pat_uid');
	if(typeof pat_uid!='undefined' && pat_uid!=null && pat_uid!='0'){
		menu+='<ul class="nav navbar-nav navbar-right welcomemenu" style="margin:0px 0 10px 0;"><li style="line-height:normal;">Welcome, '+localStorage.getItem('pat_fname')+' '+localStorage.getItem('pat_lname')+'! <a style="padding:0px; " href="logout.html?utype=patient"><strong>(Logout) </strong></a></li></ul>';
	}
	menu+='<ul id="menu-top" class="nav navbar-nav navbar-right"><li> <a class="homepage" href="index.html">Home</a> </li>';
	menu+='<li> <a href="page.html?page_id=2">About Us</a> </li>';
	if(typeof doc_uid=='undefined' || doc_uid==null || doc_uid=='0'){
		menu+='<li> <a href="page.html?page_id=3">Doctor Registration</a> </li>';
	}
	if((typeof pat_uid=='undefined' || pat_uid==null || pat_uid=='0') && (typeof doc_uid=='undefined' || doc_uid==null || doc_uid=='0')){
		menu+='<li> <a class="patient-register" href="patient-register.html">New Patient</a> </li>';
		menu+='<li> <a class="patient-login" href="patient-login.html">Patient Login</a> </li>';
	}
	if((typeof pat_uid=='undefined' || pat_uid==null || pat_uid=='0') && (typeof doc_uid=='undefined' || doc_uid==null || doc_uid=='0')){
		menu+='<li> <a class="doctor-login" href="doctor-login.html">Doctor Login</a> </li>';
	}
	if(typeof pat_uid!='undefined' && pat_uid!=null && pat_uid!='0'){
		menu+='<li> <a class="patient-account" href="patient-account.html">My Account</a>';
			menu+='<ul class="submenu"><li> <a class="patient-udoc-calls" href="patient-udoc-calls.html">Your Calls</a> </li></ul>';
		menu+='</li>';
	}
	if(typeof doc_uid!='undefined' && doc_uid!=null && doc_uid!='0'){
		menu+='<li> <a class="doctor-account" href="doctor-account.html">My Account</a>';
			menu+='<ul class="submenu"><li> <a class="doctor-udoc-calls" href="doctor-udoc-calls.html">Your Calls</a> </li></ul>';
		menu+='</li>';
	}
	if(typeof pat_uid!='undefined' && pat_uid!=null && pat_uid!='0'){
		menu+='<li> <a class="chatting" href="call.html">uDoc it</a> </li>';
	}
	menu+='</ul>';
	return menu;
}
function home_site_menus()
{
	var menu='';
	var pages='';
	var doc_uid=localStorage.getItem('doc_uid');
	var pat_uid=localStorage.getItem('pat_uid');

	menu+='<div class="row"><div class="x_panel"><div class="x_content"> <a class="homepage" href="page.html?page_id=2"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>About Us</h3></div></a></div></div>';
	if(typeof doc_uid=='undefined' || doc_uid==null || doc_uid=='0'){
	menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="page.html?page_id=3"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>Doctor Registration</h3></div></a></div></div>';
	}
	if((typeof pat_uid=='undefined' || pat_uid==null || pat_uid=='0') && (typeof doc_uid=='undefined' || doc_uid==null || doc_uid=='0')){
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="patient-register.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>New Patient</h3></div></a></div></div>';
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="patient-login.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>Patient Login</h3></div></a></div></div>';
	}
	if((typeof pat_uid=='undefined' || pat_uid==null || pat_uid=='0') && (typeof doc_uid=='undefined' || doc_uid==null || doc_uid=='0')){
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="doctor-login.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>Doctor Login</h3></div></a></div></div>';
	}
	if(typeof pat_uid!='undefined' && pat_uid!=null && pat_uid!='0'){
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="patient-account.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>My Account</h3></div></a></div></div>';
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="patient-udoc-calls.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>Your Calls</h3></div></a></div></div>';
	}
	if(typeof doc_uid!='undefined' && doc_uid!=null && doc_uid!='0'){
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="doctor-account.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>My Account</h3></div></a></div></div>';
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="doctor-udoc-calls.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>Your Calls</h3></div></a></div></div>';
	}
	if(typeof pat_uid!='undefined' && pat_uid!=null && pat_uid!='0'){
		menu+='<div class="x_panel"><div class="x_content"> <a class="homepage" href="call.html"><div class="animated flipInY col-lg-12 col-md-12 col-sm-2 col-xs-12"><h3>uDoc it</h3></div></a></div></div>';
	}
	menu+='</div>';
	return menu;
}
function site_footer()
{
	var menu='<footer><div class="container">&copy; 2017 Udoc </div></footer>';
	var doc_uid=localStorage.getItem('doc_uid');
	if(typeof doc_uid!='undefined' && doc_uid!=null && doc_uid!='0'){
		var groupids='';
		jQuery('<audio id="chatAudio"><source src="notify.ogg" type="audio/ogg"><source src="notify.mp3" type="audio/mpeg"><source src="notify.wav" type="audio/wav"></audio>').appendTo('body');
		chating = {
			updatechat: function() {
				$.ajax({
					type: "POST", // or GET
					url: realsiteurl+"/api/chat-process",
					data: {function:'chat-window',groupids:groupids, Doctor_id:doc_uid},
					dataType: "json",
					success: function(data){
						if(data['msgs'])
						{
							var html='<div class="chatwindow" id="chatwindow_123">';
							html+='<div class="chatupper"><div class="chatusers">Patient\'\s Online</div><div class="chatclose"><a href="javascript:;" class="minmaxchat" data-act="minimise" coords="123"><i class="fa fa-minus" aria-hidden="true"></i></a></div><div class="clear"></div></div><div id="contentscroll">';
							jQuery(data['msgs']).each(function(i){
								html+='<div class="chatcontent" id="chatcontent_'+data['msgs'][i]['group_id']+'"><a href="'+realsiteurl+'/appdocchat?gid='+data['msgs'][i]['grp']+'&did='+doc_uid+'">'+data['msgs'][i]['patient']+'</a></div> <div class="clear"></div>';
								if(groupids==''){
									groupids=data['msgs'][i]['group_id'];
								}
								else
								{
									groupids+=','+data['msgs'][i]['group_id'];
								}
								jQuery('#chatAudio')[0].play();
							});
							html+='</div></div>';
							jQuery('.chatwindows').html(html);
							document.getElementById('contentscroll').scrollTop = document.getElementById('contentscroll').scrollHeight;
							jQuery('.chatwindows .chatwindow').each(function(i){
								var rht=0;
								if(i!='0'){
									rht=parseInt(i*250)+3;
								}
								jQuery(this).css({'right':rht+'px'});
							});
							jQuery('.chatwindow a.closechat').click(function(){
								var gid=jQuery(this).attr('coords');
								jQuery('.chatwindows').append('<input type="hidden" class="closegpids" value="'+gid+'" />');
								jQuery(this).parents('.chatwindow').remove();
								
								jQuery('.chatwindows .chatwindow').each(function(i){
									var rht=0;
									if(i!='0'){
										rht=parseInt(i*250)+3;
									}
									jQuery(this).css({'right':rht+'px'});
								});
							});
							jQuery('.chatwindow a.minmaxchat').click(function(){
								var gid=jQuery(this).attr('coords');
								var minmax=jQuery(this).attr('data-act');
								if(minmax=='minimise'){
									jQuery(this).parents('.chatwindow').animate({
										bottom: "-260"
									}, 2000);
									jQuery(this).attr('data-act','maximize');
									jQuery(this).html('<i class="fa fa-plus" aria-hidden="true"></i>');
									jQuery('#chatwindow_'+gid+' .chatbottom').hide(1000);
								}
								else if(minmax=='maximize'){
									jQuery(this).parents('.chatwindow').animate({
										bottom: "1"
									}, 2000);
									jQuery(this).attr('data-act','minimise');
									jQuery(this).html('<i class="fa fa-minus" aria-hidden="true"></i>');
									jQuery('#chatwindow_'+gid+' .chatbottom').show(1000);
								}
							});
							
						}
						if(data['closemsgs'])
						{
							jQuery(data['closemsgs']).each(function(i){
								jQuery('.chatwindows #chatcontent_'+data['closemsgs'][i]['group_id']).remove();
							});
							if(parseInt(jQuery('.chatwindows .chatcontent').size())=='0'){
								jQuery('.chatwindows .chatwindow').remove();
							}
						}
					}
				});
				setTimeout(function(){
					chating.updatechat();
				},4000);
			}
		}
		chating.updatechat();
		menu+='<div class="chatwindows"></div>';
	}
	return menu;
}