import React from 'react';

const Register = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="flex-col w-6/12 mx-auto pt-10">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                </div>
                <div className="shrink-0 shadow-2xl bg-base-100 mt-10">
                    <form className="p-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;