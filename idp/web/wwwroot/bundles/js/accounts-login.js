function FormValidate(){return $("#access-denied").css("display","none"),"none"!==$("#password-field").css("display")?($("#login-form").valid()&&showWaitingPopup("body"),$("#login-form").valid()):!!$("#login-form").valid()&&($("#password-field, .login-options").slideDown(),$("#password-field").children(".e-float-input").removeClass("e-error"),$("#login-button").html(window.Server.App.LocalizationContent.LoginButton),$("#current-password").focus(),void("true"===showBoldSignUp.toLowerCase()&&$(".account-bg").css("height","710px")))}function getParameterByName(e){e=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search),e=e&&decodeURIComponent(e[1].replace(/\+/g," "));return e=null==e?homeUrl:e}$(document).ready(function(){var e=new ejs.inputs.TextBox({cssClass:"e-outline e-custom e-account",floatLabelType:"Always",created:function(){e.focusIn()}});e.appendTo("#login-email"),new ejs.inputs.TextBox({cssClass:"e-outline e-custom e-account",floatLabelType:"Always"}).appendTo("#current-password"),"NotActivated"===IsAdfsUserStatus?($("#access-denied").css({display:"block",width:"225px",margin:"15px 28px"}),$("#login-input-error").text(window.Server.App.LocalizationContent.AccountNotActivated)):"NotFound"===IsAdfsUserStatus&&$("#access-denied").css("display","block"),"true"===IsAdfsUserNotFound&&$("#access-denied").css("display","block"),"true"===isAuthError.toLowerCase()&&$("#validate-auth-user").css("display","block").find(".auth-error-text").html(authMessage),"true"===isAzureResetPassword.toLowerCase()&&$("#azure-b2c-password-reset").css("display","block"),$("#login-form").validate({errorElement:"span",onkeyup:function(e,o){9!=o.keyCode&&$(e).valid(),"userName"===e.name&&$(e).val($(e).val().replace(/\s/g,""))},onfocusout:function(e){$(e).valid()},rules:{email:{required:!0},password:{required:!0}},highlight:function(e){$(e).closest(".input-field-form").addClass("has-error"),$("#error-email").css("display","none")},unhighlight:function(e){$(e).closest(".input-field-form").removeClass("has-error"),$(e).closest(".e-outline").removeClass("e-error"),$(e).parent().find("span.validation-holder").html("")},errorPlacement:function(e,o){$(o).parent().find("span.validation-holder").html(e),$(o).parent().find("span.validation-holder").css("display","block"),$("#error-password").css("display","none")},messages:{email:{required:window.Server.App.LocalizationContent.EmailValidator},password:{required:window.Server.App.LocalizationContent.PasswordValidator}}}),"undefined"!=typeof IsWindowADEmbedSSOAuth&&"true"===IsWindowADEmbedSSOAuth.toLowerCase()&&(isWindowADDefaultAuth="false",$("#login-button-windows").click()),"undefined"!=typeof isWindowADDefaultAuth&&"true"===isWindowADDefaultAuth.toLowerCase()&&$("#login-button-windows").click()}),$(document).on("click","#login-button-windows",function(){showWaitingPopup("body"),e=-1===window.location.href.search("authorization")?getParameterByName("ReturnUrl"):WindowADCallBackUrl,$("#access-denied").html("<span class='su su-login-error'></span> "+window.Server.App.LocalizationContent.AccessDenied),$("#access-denied, #validate-azure-user, #validate-ad-user, #validate-auth-user, #azure-b2c-password-reset").css("display","none");var e,o=rootUrl+(-1===window.location.href.search("authorization")?"windowsauthentication/account/login":"windowsauthentication/account/oauthlogin?client_id="+$("#external-authentication-client-id").val());return $.ajax({type:"GET",url:o+"?returnUrl="+e,data:{},cache:!1,contentType:"application/json; charset=utf-8",statusCode:{401:function(){hideWaitingPopup("body"),$("#access-denied").css("display","block")},503:function(){hideWaitingPopup("body"),$("#access-denied").html("<span class='su su-login-error'></span> "+window.Server.App.LocalizationContent.SeviceUnAvailable),$("#access-denied").css("display","block")},500:function(){hideWaitingPopup("body"),$("#access-denied").css("display","block")},404:function(){hideWaitingPopup("body"),$("#access-denied").css("display","block")},200:function(e){hideWaitingPopup("body"),e.status&&e.data&&(window.location.href=mfaVerificationPageUrl),e.status&&""==e.data?-1===window.location.href.search("authorization")?window.location.href=getParameterByName("ReturnUrl"):"undefined"!=typeof IsWindowADEmbedSSOAuth&&"true"===IsWindowADEmbedSSOAuth.toLowerCase()?window.location.href=WindowADCallBackUrl:window.location.reload():(hideWaitingPopup("body"),(null==e.data||""==e.data?$("#access-denied"):($("#validate-ad-user").html(e.data.replace(/[''\[\]\/]/gi,"")),$("#validate-ad-user"))).css("display","block"))},304:function(e){hideWaitingPopup("body"),"true"!=e.responseText.toLowerCase()&&(hideWaitingPopup("body"),$("#access-denied").html("<span class='su su-login-error'></span> "+window.Server.App.LocalizationContent.SeviceUnAvailable),$("#access-denied").css("display","block"))}},complete:function(e){hideWaitingPopup("body")},dataType:"json",success:function(e){}}),!1}),$(document).on("click",".auth-login-button",function(){$("#access-denied, #validate-azure-user, #validate-ad-user, #validate-auth-user, #azure-b2c-password-reset").css("display","none")}),$(document).on("click change","#login-email",function(){"none"!==$("#password-field").css("display")&&($(".login-options, #password-field").slideUp(),$("#password-field").removeClass("has-error"),$("#login-button").html(window.Server.App.LocalizationContent.ContinueButton),$("#current-password").val(""))}),$(document).on("click","#windows-login",function(){var e=$("#login-email").val();$("#azure-email").val(e)}),$(document).on("click","#azureadfs-login",function(){var e=$("#login-email").val();$("#external-email").val(e)}),$(document).on("keyup","#login-email",function(){$("#error-email").css("display","none"),$("#error-password").css("display","none")}),$(document).on("keyup","#current-password",function(){$("#error-password").css("display","none")}),$(document).on("click",".forgot-pwd-link",function(e){e.preventDefault(),""!=$("#login-email").val()&&null!=$("#login-email").val()&&localStorage.setItem(window.location.hostname+"_email",$("#login-email").val()),window.location.href=$(this).attr("href")}),$(document).on("click","#adfs-login-text",function(){$("#azureadfs-login").click()}),$(document).on("click","#adfs-login-text",function(){$("#windows-login").trigger("click")}),$(function(){$(document).on("click",".show-hide-password",function(){$(this).siblings().find("input").is(":password")?($(this).siblings().find("input").attr("type","text"),$(this).removeClass("su-show").addClass("su-hide").attr("data-original-title",window.Server.App.LocalizationContent.ClicktoHide)):($(this).siblings().find("input").attr("type","password"),$(this).removeClass("su-hide").addClass("su-show").attr("data-original-title",window.Server.App.LocalizationContent.ClicktoView)),$(this).tooltip("show")}),$(document).on("touch",".show-hide-password",function(){$(this).siblings().find("input").is(":password")?($(this).siblings().find("input").attr("type","text"),$(this).removeClass("su-show"),$(this).addClass("su-hide")):($(this).siblings().find("input").attr("type","password"),$(this).removeClass("su-hide"),$(this).addClass("su-show"))})});