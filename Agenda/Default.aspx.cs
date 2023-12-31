using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using Newtonsoft.Json;
using System.Web.UI.HtmlControls;

namespace Agenda
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Limpar os campos
                txtData.Value = "";
                txtTitulo.Value = "";
                txtModulo.Value = "";
                txtSistema.Value = "";
                txtTexto.Value = "";
            }

            // Verificar se a requisição foi feita pelo botão "Enviar"
            if (IsPostBack && Request.Form["Enviar"] != null)
            {
                // Chamar o método Enviar_Click
                Enviar_Click(sender, e);
            }
        }
        public class DadosWrapper
        {
            public List<NovoDado> dados { get; set; }
        }

        public class NovoDado
        {
            public string data { get; set; }
            public string titulo { get; set; }
            public string modulo { get; set; }
            public string sistema { get; set; }
            public string texto { get; set; }
        }
        protected void Enviar_Click(object sender, EventArgs e)
        {

            string Cidade = hdnValor.Value; // Acesse o valor do atributo "value"

            // Criar um novo objeto DadosWrapper em branco
            DadosWrapper dadosWrapper = new DadosWrapper();

            // Criar um novo objeto NovoDado em branco
            NovoDado novoDado = new NovoDado();

            // Ler o arquivo JSON existente
            string json = File.ReadAllText(Server.MapPath("~/NoRelacional/" + Cidade + ".json"));

            // Desserializar o JSON em um objeto DadosWrapper
            dadosWrapper = JsonConvert.DeserializeObject<DadosWrapper>(json);

            // Criar um novo objeto NovoDado
            novoDado = new NovoDado
            {
                data = txtData.Value,
                titulo = txtTitulo.Value,
                modulo = txtModulo.Value,
                sistema = txtSistema.Value,
                texto = txtTexto.Value
            };

            // Adicionar o novo objeto à lista de dados existentes
            dadosWrapper.dados.Add(novoDado);

            // Limpar os inputs
            txtData.Value = "";
            txtTitulo.Value = "";
            txtModulo.Value = "";
            txtSistema.Value = "";
            txtTexto.Value = "";

            // Converter o objeto DadosWrapper atualizado em JSON
            string jsonAtualizado = JsonConvert.SerializeObject(dadosWrapper, Formatting.Indented);

            // Escrever o JSON atualizado de volta para o arquivo
            File.WriteAllText(Server.MapPath("~/NoRelacional/" + Cidade + ".json"), jsonAtualizado);

            // Fechar a conexão com o arquivo JSON
            using (FileStream fs = File.Open(Server.MapPath("~/NoRelacional/" + Cidade + ".json"), FileMode.OpenOrCreate, FileAccess.Write))
            {
                // Operação vazia para fechar o arquivo
            }

            // Redirecionar para a página de confirmação
            Response.Redirect("~/Default.aspx");
        }


    }
}