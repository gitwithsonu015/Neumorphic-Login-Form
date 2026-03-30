const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        const messageBox = document.getElementById('message-box');

        // Sliding Animation Listeners
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
        
        // Mobile Toggle Function
        function toggleMobile() {
            if (container.classList.contains("right-panel-active")) {
                container.classList.remove("right-panel-active");
            } else {
                container.classList.add("right-panel-active");
            }
        }

        // Form Handling Demo
        function handleForm(event, msg) {
            event.preventDefault();
            const form = event.target;
            const btn = form.querySelector('.btn');
            const originalText = btn.innerText;
            
            // Loading state
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
            
            setTimeout(() => {
                btn.innerText = originalText;
                showMessage(msg);
            }, 1500);
        }

        function showMessage(text) {
            messageBox.innerText = text;
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 3000);
        }
