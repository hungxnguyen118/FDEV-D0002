<?php
include_once('./libraries/function_support.php');

class config {
	public $mail_user = 'bookstorehungnguyen@gmail.com';
    public $mail_pass = 'Vm0wd2VFNUdWWGhUV0docFVtMVNjRlZ0TVZOV1ZsbDNXa2M1VjFKdGVEQlpNM0JIWVVaS2MxWnFUbGROYWtaSVdWWlZlRll4V25GVWJIQlhWbXh3VVZkV1kzaFRNVTVYVW01T2FWSXdXbFJXYWtwdlZGWmFjMVp0UmxkTlZuQlhWRlpXVjJGSFZuRlJWR3M5';
    
    function get_password_email(){
        return decrypt_custom($this->mail_pass);
    }
}
?>