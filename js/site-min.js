var populate_dents=function(a){if(!a){return false}$.ajax({url:"http://identi.ca/api/statusnet/tags/timeline/"+a+".json",dataType:"json",success:function(d){if(d.length>0){$(".related").before('<h2>Dents  in Reply to This Post</h2><p>You can reply tothis post on identi.ca using the has tag <ahref="http://identi.ca/tag/'+a+'">#'+a+'</a></p><ol class="dents"></ol>');$(".dents").css("font-size",".9em");var c=[];for(i in d){c=d[i];var b=c.created_at.replace(/\d\d:\d\d:\d\d \+0000/g,"");$(".dents").append('<li><a href="http://identi.ca/notice/'+c.id+'">'+c.user.name+"</a> "+c.statusnet_html+"<br>@ <time>"+b+"</time></li>")}}else{$(".related").before('<aside><p>&hearts; Reply to this post on <a href="http://identi.ca">identi.ca</a> using the hash tag <strong>#'+a+"</strong></p></aside>")}}})};