<%@ Page Title="" Language="C#" MasterPageFile="~/PageMaster.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Agenda.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="Script/main.js"></script>
    <link rel="stylesheet" href="Style/main.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:HiddenField ID="hdnValor" runat="server" ClientIDMode="Static" />
    
    <div class="Container">
        <div class="Opcoes">
            <h1>Municipios</h1>
            <div class="cidades">
                <div>
                    <h3>Colatina</h3>
                    <button onclick="VerDados()" type="button">Exibir Dados</button></div>

                <div>
                    <h3>Rio Branco</h3>
                    <button onclick="VerDados()" type="button">Exibir Dados</button></div>
            </div>
        </div>
        <div class="Dados">
            <div class="cabecalho"></div>
            <div class="Adicionar">
                <div>
                <label>Data:<input type="date" id="txtData" runat="server" required="true"/></label>
                <label>Titulo:<input type="text" id="txtTitulo" runat="server" required="true"/></label>
                <label>Modulo:<input type="number" id="txtModulo" runat="server" required="true"/></label>
                <label>Sistema:<input type="text" id="txtSistema" runat="server" required="true"/></label>
                <label>Texto:<textarea id="txtTexto" runat="server" required="true"></textarea></label>
                <asp:Button ID="btnEnviar" runat="server" Text="Enviar" OnClick="Enviar_Click"/>
                    </div>
            </div>
            <div class="Informacoes"></div>
        </div>
    </div>

    
</asp:Content>
