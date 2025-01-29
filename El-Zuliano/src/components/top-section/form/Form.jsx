import { Link } from 'react-router-dom'
import './form.css';

export default function Form( {login, subscribe, onCloseForm} ) {

    const handleCloseClick = () => {
        onCloseForm()
    }


    return (
    <>
       {login && (
              <div className='body-overlay'>
                <div className='login-container'>
                    <h3>Iniciar Sesion</h3>
                    <button className='login-close-button' onClick={handleCloseClick}><img src='/close.png'/></button>

                    <form>
                        <div className="flex-column">
                            <div className='login-input-container'>
                                <label>Tu Email:</label>
                                <input type='email' placeholder="Email" />
                            </div>

                            <div className='login-input-container'>
                                <label>Tu Contraseña:</label>
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        
                        <button type="submit" className='login-button'>Ingresar</button>
                        <div className='login-footer'>
                        <span>Olvidaste tu Contraseña?</span>
                            <Link>Recuperar Contraseña</Link>
                            </div>
                    </form>
                </div>
              </div>
            )}

{subscribe && (
    <div className='body-overlay'>
        <div className='login-container1'>
            <img src="/letter.png" alt="letter-icon" style={{ width: '40px', marginBottom: '0.5rem' }} />
            <h3>Subscribirse a Nuestro Periódico</h3>
            <button className='login-close-button' onClick={handleCloseClick}><img src='/close.png' /></button>
            <form>
                <div className="flex-column">
                    <div className='login-input-container'>
                        <label>Tu Email:</label>
                        <input type='email' placeholder="Email" />
                    </div>
                    <div className='login-input-container'>
                        <label>Información de Pago:</label>
                        <input type='text' placeholder="Número de Tarjeta" />
                        <input type='text' placeholder="Fecha de Expiración (MM/AA)" />
                        <input type='text' placeholder="CVC" />
                    </div>
                    <div className='login-input-container'>
                        <label>Plan de Suscripción:</label>
                        <select>
                            <option value="monthly">Mensual - $5</option>
                            <option value="annual">Anual - $60</option>
                        </select>
                    </div>
                    <div className='subscription-benefits'>
                        <h4>Beneficios de Suscripción:</h4>
                        <ul>
                            <li>Acceso exclusivo a la sección de trabajos.</li>
                            <li>Capacidad para comentar en la Opinión de los Domingos.</li>
                        </ul>
                    </div>
                </div>
                <button type="submit" className='login-button'>Subscribirse</button>
            </form>
        </div>
    </div>
)}
        </>
    );
}