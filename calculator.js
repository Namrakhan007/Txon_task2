        
        function clearScreen() {
            document.getElementById("result").value = "";
        }
        function display(value) {
        document.getElementById("result").value += value;
        }
            // This function evaluates the expression and returns result
        function Calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
        }
