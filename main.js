    var x = new Date();
    var dayStats = {
        frontEnd : [
            {
                errorId : 1,
                title : "error 1",
                number : 5
            },
            {
                errorId : 2,               
                title : "error 2",
                number : 7
            },
            {
                errorId : 3,
                title : "error 3",
                number : 10
            },
            {
                errorId : 4,
                title : "error 4",
                number : 1
            }
        ] ,
        backEnd : [
            {
                errorId : 1,
                title : "error 1",
                number : 5
            } ,
            {
                errorId : 2,
                title : "error 2",
                number : 7
            } ,           
            {
                errorId : 3,
                title : "error 3",
                number : 7
            } ,
            {
                errorId : 8,
                title : "error 4",
                number : 3
            } ,
            {
                errorId : 9,
                title : "error 5",
                number : 2
            } ,

        ] 
    };

    var errorDetail = {
        errorId : 1,
        data : [
            {   date: "2017-08-17",
                title: "Error title",
                number: 20,
                users: [ 1,3,7,33,65],
                browser:["chrome", "mozila", "Opera"]
            } ,
            {   date: "2017-08-17",
                title: "Error title",
                number: 20,
                users: [ 1,3,7,33,65],
                browser:["chrome", "mozila", "Opera"]
            } ,
            {   date: "2017-08-17",
                title: "Error title",
                number: 20,
                users: [ 1,3,7,33,65],
                browser:["chrome", "mozila", "Opera"]
            } ,                        
        ]
    }
        function errorPage( errorId , isFrontEnd ){
            

            
            var errorsArr;

             document.getElementById("theMainestPage").className = "hidden";
             document.getElementById("ErrorDetails").className = "";
             document.body.className = "pupipu";
            //console.log( errorId );
            
            //er4or
            if ( isFrontEnd){
                errorsArr = dayStats.frontEnd;
            }
            else
                {
                    errorsArr = dayStats.backEnd;
                }
                for ( var i = 0; i < errorsArr.length; i ++){
                    if (errorsArr[i].errorId == errorId){
                        document.getElementById("er4or").innerHTML = "Error: " + errorsArr[i].title;
                    }
                    
                }

                errorsTable = "<table><tr><th>Date</th><th>Number</th><th>UserId</th><th>Browser</th></tr><tr><td>" + errorDetail.data.date + "</td><td>" + errorDetail.data.number 
                +"</td><td>" + errorDetail.data.user + "</td><td>" + errorDetail.data.browser + " </td></tr></table>";
                errorsTable += "/<table>" ;
                document.getElementById("ErrorPageWithDetails").innerHTML= errorsTable;

        }
        function nextDay(){ 
             x.setDate(x.getDate() + 1 ); 
            document.getElementById("date").innerHTML=x.toDateString() ;
        }
        function backDay(){
            x.setDate(x.getDate() - 1) ;
            document.getElementById("date").innerHTML= x.toDateString() ;
        }
    
    
    document.getElementById( "date" ).innerHTML = x.toDateString();
    document.getElementById( "btnPrevDay" ).onclick = backDay;
    document.getElementById( "btnNextDay").onclick  = nextDay;

    function RenderTable( data )
    {
        var content;
        var frontEnd = "";
        var backEnd = "";

        function GeneratePart( data , isFrontEnd )
        {
            var result = {
                html : "" ,
                number : 0 
            };

            result.html = "<table>";
            for ( var i = 0; i < data.length; i++){
                result.html += "<tr onclick =\"errorPage(" + data[ i ].errorId + "," + isFrontEnd + ")\" ><td>" + data[i].title + "</td> <td class = \"ErrorsNumber\" > " + data[i].number + " </td></tr>";
                result.number += data[i].number ;
            }

            result.html += "</table>";

            return result;
        }
        frontEnd = GeneratePart( data.frontEnd , true );
        backEnd = GeneratePart( data.backEnd , false );

        content = "<table><tr><th class = \"default\">FrontEnd Errors</th><th class = \"default\">" + frontEnd.number
            + "</th><th class = \"default\">BackEnd Errors</th><th class = \"default\">" + backEnd.number 
            + "</th></tr><tr><td colspan=\"2\">" + frontEnd.html + "</td><td colspan=\"2\">" + backEnd.html + "</td></tr>";   
    
        content += "</table>";

        document.getElementById( "tableWrapper" ).innerHTML = content;
    }

    RenderTable( dayStats );
    function back3(){
            document.getElementById("theMainestPage").className = "";
            document.getElementById("ErrorDetails").className = "hidden";
            document.body.className = "";
    }
