<!DOCTYPE html>
<html lang="en">
<head>
</head>

<body>

<form action="javascript:sendMail();" name="pmForm" id="pmForm" method="post">
Enter Friend's Email:
<input name="subject" id="subject" type="text" maxlength="64" style="width:98%;" value="ddddddddddd" />
<input name="pmSubmit" type="submit" value="Invite" />


<script>
window.open('mailto:test@example.com?subject=$subject');

</script>

</body>
</html>