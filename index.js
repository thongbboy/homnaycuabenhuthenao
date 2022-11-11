	
		/* Add "https://api.ipify.org?format=json" statement
				this will communicate with the ipify servers in
				order to retrieve the IP address $.getJSON will
				load JSON-encoded data from the server using a
				GET HTTP request */
					
                $.getJSON("https://api.ipify.org?format=json", function(data) {
			
                    // Setting text of element P with id gfg
                    $("#gfg").html(data.ip);
                    $("#namsinh").html(data.ip);
                    console.log(data.ip);
                })
        
                xyz = $.getJSON("https://api.ipify.org?format=json");
                
        
                function thaydoi() {
                    $("#namsinh").html(data.ip);
                }

                var curDate = new Date();
      
                // Ngày hiện tại
                var curDay = curDate.getDate();
             
                // Tháng hiện tại
                var curMonth = curDate.getMonth() + 1;
                  
                // Năm hiện tại
                var curYear = curDate.getFullYear();

                console.log(curDate)
             
                // Gán vào thẻ HTML
                document.getElementById('ngay').innerHTML = curDay ;
                document.getElementById('thang').innerHTML = curMonth + ' ' + '/' + ' ' + curYear ;

            