import postData from '../services/requests';
const forms = (current_form) => {
  const forms = document.querySelectorAll(current_form),
        inputs = document.querySelectorAll('input');
  const message = {
    loading: 'Загрузка...',
    success: 'Дякую! Ми скоро з вами зв`яжимось',
    failure: 'Щось пішло не так!',
    inputfail: 'Заповніть будь ласка поля коректними данними',
    spinner: 'img/main/footer/spinner.gif',
    ok: 'img/main/footer/ok.png',
    fail: 'img/main/footer/fail.png'
  };

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      sendForm(this);
    });
  });

  async function sendForm(form) {
    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0) {
			form.classList.add('_sending');
			makeStatusMsg(form, message.spinner, message.loading);

			postData('./sendmail.php', formData)
				.then(() => {
					makeStatusMsg(form, message.ok, message.success);
				})
				.catch(() => {
					makeStatusMsg(form, message.fail, message.failure);
				})
				.finally(() => {
					clearInputs();
					form.classList.remove('_sending');
					setTimeout(() => {
						removeStatusMsg(form);
						form.style.display = 'block';
						form.classList.remove('fadeOutUp');
						form.classList.add('fadeInUp');
					}, 5000);
				});
		} else {
			if(!(form.querySelectorAll('.message-err').length>0)){
				makeErrMsg(form);
				removeErrMsg('.message-err');
			}

		}
  }

  function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
  function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
  function removeErrMsg(selector){
    setTimeout(() => {
      document.querySelector(selector).remove();
    }, 3000);
  }
  function makeErrMsg(form){
    form.insertAdjacentHTML('afterbegin', `<div class="message-err">${message.inputfail}</div>`);
  }
  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  };
	function makeStatusMsg(form, status, text_msg){
		if(document.querySelector('.status')) {	document.querySelector('.status').remove();}
		let statusMessage = document.createElement('div');
		let statusImg = document.createElement('img');
		let textMessage = document.createElement('div');
		statusImg.setAttribute('src', status);
		textMessage.textContent = text_msg;
  	statusMessage.classList.add('status');
		statusMessage.appendChild(statusImg);
		statusMessage.appendChild(textMessage);

		form.classList.add('animated', 'fadeOutUp');
		setTimeout(() => {
			form.style.display = 'none';
		}, 400);
		console.log(form.parentNode, statusMessage);
		form.parentNode.appendChild(statusMessage);
		statusImg.classList.add('animated', 'fadeInUp');
	}
	function removeStatusMsg(form){
		if(form.parentNode.querySelector('.status')) {document.querySelector('.status').remove();}
	}
};

export default forms;