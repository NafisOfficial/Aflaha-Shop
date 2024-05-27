import { useContext } from "react";
import { Form } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const Register = () => {

    const {signinWithEmailPassword,signinWithGoogle}  = useContext(authContext)

    const handleSignIn=(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        signinWithEmailPassword(email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleGoogleSignUp=(event)=>{
        event.preventDefault()
        const provider = new GoogleAuthProvider();
        signinWithGoogle(provider)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="flex-col w-6/12 mx-auto pt-10">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                </div>
                <div className="shrink-0 shadow-2xl bg-base-100 mt-10">
                    <Form onSubmit={handleSignIn} className="p-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary"/>
                            <button onClick={handleGoogleSignUp} className="btn btn-primary mt-5">Sign in With google</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;