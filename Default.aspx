<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>dragon game</title>
    <link rel="stylesheet" href="StyleSheet.css" />
    <script src="JavaScript.js"></script>
</head>
<body>
    <form id="form1" runat="server">
     <div class="gameContainer">
            <div class="gameOver">Game Over</div>
            <div class="dragon dragonAni"></div>
            <div id="scoreCont">Your Score: 0</div>

            <div class="obstacles"></div>
        </div>
    </form>
</body>
</html>
