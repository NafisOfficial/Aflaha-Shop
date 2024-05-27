import { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {

    const {logInWithEmailPassword} = useContext(authContext)

    const handleLogIn = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        logInWithEmailPassword(email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error);
        })

        
    }


    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value="submit" className="btn btn-primary"/>
                        </div>
                        <p className='text-sm'>If you don&apos;t  have any account please <Link to="/register" className='text-lime-700 font-bold'>register</Link></p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;