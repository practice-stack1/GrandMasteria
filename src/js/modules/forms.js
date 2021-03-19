import {postData} from '../services/requests';
const forms = (current_form) => {
  const forms = document.querySelectorAll(current_form),
        inputs = document.querySelectorAll('input');
  const message = {
    loading: 'Загрузка...',
    success: 'Дякую! Ми скоро з вами зв`яжимось',
    failure: 'Щось пішло не так!',
    inputfail: 'Заповніть будь ласка поля коректними данними',
    spinner: 'img/main/footer/spinner.gif',
    ok: 'icons/ok.svg',
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
		const btn = form.querySelector('.form__submit-section');
    if (error === 0) {
			form.classList.add('_sending');
			makeStatusMsg(btn, message.spinner, message.loading);

			postData('./sendmail.php', formData)
				.then(() => {
					makeStatusMsg(btn, message.ok, message.success);
				})
				.catch(() => {
					makeStatusMsg(btn, message.fail, message.failure);
				})
				.finally(() => {
					clearInputs();
					form.classList.remove('_sending');
					setTimeout(() => {
						removeStatusMsg(btn);
						btn.style.display = 'block';
						btn.classList.remove('fadeOutUp');
						btn.classList.add('fadeInUp');
					}, 5000);
				});
		} else {
			if(form.dataset.msg === 'true'){
				if(!(form.querySelectorAll('.message-err').length>0)){
					makeErrMsg(form);
					removeErrMsg('.message-err');
				}
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
		if(document.querySelector('.form .status')) {	document.querySelector('.form .status').remove();}
		let statusMessage = document.createElement('div');
		let statusImg = document.createElement('img');
		let textMessage = document.createElement('div');
		let imgWrapper = document.createElement('div');
		imgWrapper.classList.add('status__wrapper');
		statusImg.setAttribute('src', status);
		imgWrapper.appendChild(statusImg);
		textMessage.textContent = text_msg;
		textMessage.classList.add('status__text');
		statusMessage.classList.add('status');
		statusMessage.appendChild(imgWrapper);
		statusMessage.appendChild(textMessage);
		form.classList.add('animated', 'fadeOutUp');
		setTimeout(() => {
			form.style.display = 'none';
		}, 400);
		form.parentNode.appendChild(statusMessage);
	}
	function removeStatusMsg(form){
		if(form.parentNode.querySelector('.status')) {form.parentNode.querySelector('.status').remove();}
	}
};

export default forms;