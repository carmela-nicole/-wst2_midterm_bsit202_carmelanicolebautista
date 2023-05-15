$('.register').click(function(){
    // if($('#name').val() == ''){
    //     $('#name').css({'border':'1px solid red'})
    // }
    $.ajax({
        url:'router/router.php?ind=register',
        data:$('#registration').serialize(),
        type:'POST',
        beforeSend:function(){
            // $('.register').html('Submitting...')
            $('#preloader').css({'display':'block'})
        },
        success:function(e){
            if(e == 'success'){
                $('#registration_status').html('<p class="alert alert-success">Successfully Registered</p>')
                $('#email').val('')
                $('#password').val('')
                $('#name').val('')
            }else if(e == 'email already exist'){
                $('#registration_status').html('<p class="alert alert-danger">Email already exists!</p>')
            }
            $('#preloader').css({'display':'none'})
        }
    })
})

$('.login').click(function(){
    $.ajax({
        url:'router/router.php?ind=login',
        type:'POST',
        data:$('#login').serialize(),
        beforeSend:function(){
            $('#preloader').css({'display':'block'})
        },
        success:function(e){
            if(e == 'success'){
                $('#login_status').html('<p class="alert alert-success">Successfully Logged In</p>')
                window.location.href = 'profile.php';
            }else if(e == 'Invalid Email or Password'){
                $('#login_status').html('<p class="alert alert-danger">Invalid Email or Password</p>')
            }
            $('#preloader').css({'display':'none'})
        }
    })
})