
function myBlurFunction() {
    document.getElementById("myInput").style.backgroundColor = "";
}
onblur="myFunction()"


function CreateScriptDbProd(){

    let nameResourceGroup = document.getElementById("nameResourceGroup").value;		
    let region = document.getElementById("region").value;				
    let server_name = document.getElementById("server-name").value;			
    let db_username = document.getElementById("db-username").value;			
    let db_password = document.getElementById("db-password").value;			
    let your_ip_address = document.getElementById("your-ip-address").value;		
    let user_name_git_azure = document.getElementById("user_name_git_azure").value;	
    let password_git_azure = document.getElementById("password_git_azure").value;	
    let nameAppServicePlan = document.getElementById("nameAppServicePlan").value;	
    let app_name = document.getElementById("app-name").value;				
    let version = document.getElementById("version").value;				
    let connection_string = document.getElementById("connection-string").value;	

    let script_group_create = `az group create --name ${nameResourceGroup} --location "${region}" `;
    let script_sql_server_create = `az sql server create --name ${server_name} --resource-group ${nameResourceGroup} --location "${region}" --admin-user ${db_username} --admin-password ${db_password}`;
    let script_firewall_create = `az sql server firewall-rule create --name AllowLocalClient --server ${server_name} --resource-group ${nameResourceGroup} --start-ip-address=${your_ip_address} --end-ip-address=${your_ip_address}`;
    let script_db_create = `az sql db create --resource-group ${nameResourceGroup} --server ${server_name} --name coreDB --service-objective S0`;
    let script_connection_string_create = `az sql db show-connection-string --client ado.net --server ${server_name} --name coreDB`;

    let script = `<div> <h2>Criar um Banco de Dados SQL de produção</h2> <p> ${script_group_create}</p><div>`;
    script =  script + `<div> <h4>2- Criar um servidor lógico do Banco de Dados SQL</h4> <p> ${script_sql_server_create}</p><div>`
    script =  script + `<h4>3- Configurar uma regra de firewall de servidor </h4> <p> ${script_firewall_create}</p><div>`
    script =  script + `<div> <h4>4- Criar um banco de dados </h4> <p> ${script_db_create}</p><div>`
    script =  script + `<div> <h4>5- Recuperar ConnectionString </h4><p> ${script_connection_string_create}</p><div>`
    console.log(script);
}
