import React from 'react'
import styles from './styles.module.css'
import LoginBox from '../login/components/loginForms/index'
const Login = () => {
	return (
		<>
			<div className={styles.container}>
				<img src="https://www.redblox.io/static/icons/redblox-metaverse-w.svg" alt="Redblox-logo" />
				<div className={styles.loginContainer}>
					<LoginBox />

					<div class="aspect-video w-2/4 h-fit rounded overflow-hidden shadow-lg">
						<iframe
							class="w-full h-full"
							src="https://www.youtube.com/embed/FF3fuYLnApQ"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
                            ></iframe>
					</div>
				</div>
				<p className={styles.description}>Admin</p>
			</div>
		</>
	)
}

export default Login
