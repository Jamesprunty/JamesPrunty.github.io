<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>STARDLE</title>
        <meta name="description" content="An interactive getting started guide for Brackets.">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        
        <h1>Stardle</h1>
        <h2>Guess the movie!</h2>
        
        <?php
            include('Connect.php');
        ?>
        
        <p id="cars"></p>
        
        <script type="text/javascript">
            
            var Movie = <?php echo json_encode($result); ?>;
            document.getElementById("demo").innerHTML = Movie[0];
            
        </script>
        
        <h1><?php echo "This message is from server side." ?></h1>
        
        <table id="table" border="1">
        
        
            <tr>
            
                <th>Stars</th>
                        
            </tr>
            <tr id= "s1" class = "show">
                <td></td>
            </tr>
            <tr id= "s2" class = "hide">
                <td></td>
            </tr>
            <tr id= "s3" class = "hide">
                <td></td>
            </tr>
            <tr id= "s4" class = "hide">
                <td></td>
            </tr>
            <tr id= "s5" class = "hide">
                <td></td>
            </tr>       
        
        
        </table>
        
        <input type="text" id="Movie" placeholder="Enter Movie"/><br><br>
        <button onclick="submitAns()">Submit</button>
        <p id="demo"></p>
        

        
        
        <script>
        
            var cars = [
                            ["Cars"],
                            ["Owen Wilson"],
                            ["Paul Newman"],
                            ["Bonnie Hunt"],
                            ["Larry the cable Guy"],
                            ["Cheech Marin"]
                        ],
                table = document.getElementById("table");
            
            for(var i = 1; i < table.rows.length; i++)
                {
                    
                    table.rows[i].innerHTML = cars[i];
                                    
                    
                }
        
        
        </script>
        
        
        
        
        
                <script>
                    
                    var Ans = cars[0];
                    //document.getElementById("demo").innerHTML = Ans;
                    
                    var noGuesses = 0;
                    
                    function submitAns() {

                        var guess = document.getElementById("Movie").value;
                        //document.getElementById("demo").innerHTML = x;
    
                        while (noGuesses < 5){
                        
                        
                        if (guess == Ans){
        
                        document.getElementById("demo").innerHTML = "Well Done";
                        exit;
        
                        } else if (noGuesses == 0){
        
        
                            document.getElementById("s2").classList.remove('hide');
                            document.getElementById("s2").classList.add('show');
                            noGuesses++;
                            exit;

                        } else if (noGuesses == 1){
        
        
                            document.getElementById("s3").classList.remove('hide');
                            document.getElementById("s3").classList.add('show');
                            noGuesses++;
                            exit;
                            
                        } else if (noGuesses == 2){
        
        
                            document.getElementById("s4").classList.remove('hide');
                            document.getElementById("s4").classList.add('show');
                            noGuesses++;
                            exit;
                            
                        } else if (noGuesses == 3){
        
        
                            document.getElementById("s5").classList.remove('hide');
                            document.getElementById("s5").classList.add('show');
                            noGuesses++;
                            exit;
                            
                        } else if (noGuesses == 4 && guess != Ans){
        
                                document.getElementById("demo").innerHTML = cars[0];
                            exit;
                            

                            
                        }
                        }
                    }
                    
                                
                                

</script>
        
        
        
        
    </body>
</html>
