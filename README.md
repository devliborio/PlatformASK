<b><h1 align="center">PlatformASK</h2></b>

<p align="center">
    Plataforma de perguntas e respostas anônima
</p>

<br>

### ⚙ **Demonstração do Site**

Aqui você pode ver a pagina inicial do projeto onde estão depositadas as perguntas.

<http://204.48.25.5/>

<div>
    <a href="http://204.48.25.5/"><img  width= "80%" src="https://github.com/devliborio/user-images/blob/master/Img/readme_platformask.png?raw=true"/></a>
</div>

---

### ℹ️ **Como funciona o Projeto**

Basicamente ao entrar no site você vera a homepage que é basicamente onde ficam todas as perguntas que foram feitas no site, e logo abaixo das perguntas no canto inferior esquerdo está o botão onde você pode cadastrar sua pergunta.

Ao entrar dentro de cada pergunta você irá perceber que lá estão todas as resposta para a perguta especifica e também um campo para você responder a mesma.

Bom a lógica dele funcina da seguinte forma:

- Ao entrar no site você já é redirecionado a rota inicial do projeto a `"/"` ou `"Home Route"` e nela você visualizara todos as perguntas que foram registradas por usuários.

- Se você clicar no botão para registrar perguntas você vai ser redirecionado para a rota `/ask`, onde está armazenado um formulario com um `input type text` um `textarea` e um `button` sendo respectivamente, o campo do titulo da pergunta que você vai cadastrar e a descrição da pergunta e o botão onde está setado o `method POST` para enviar esses dados para o myqsl (banco de dados).

- Agora se em vez de registrar uma pergunta você quiser somente responeder alguma, ao clicar no botão "Responder" no campo da pergunta selecionada você será redirecionado para um rota `question/:id` onde tera primeiro o mesmo titulo e descrição da pergunta que foi selecionada para resposta, como também um `textarea` para que você possa enviar uma resposta para a solicitação da pergunta, o botão assim como o anterior é estruturado com o `method POST` e enviara a resposta para o mysql que por sua vez através de um código javascript irá renderizar isso na propria rota `question/:id` no campo de "Respostas".

> **Note**
> Foi usado o EJS (view engine) para renderizar os códigos HTML no node.js e o body-parser para tratar os formulários no node.
---

### **Referencia**

- [Formação Node.js](https://www.udemy.com/course/formacao-nodejs/)

<br>

### 🙋‍♂️ **Support**

💙 Se você gostou do projeto dẽ uma ⭐ e compartilhe com os amigos!
