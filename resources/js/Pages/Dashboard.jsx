import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const { data, setData, post } = useForm({
        images: "",
    });

    const handleSendImage = (e) => {
        e.preventDefault();
        post("/images");
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-4">
                <form onSubmit={handleSendImage}>
                    <div>
                        {/** setDataでimageに画像を格納するときに添字をつけない */}
                        <input
                            type="file"
                            multiple
                            onChange={(e) => setData("images", e.target.files)}
                        />
                    </div>
                    <button
                        className="px-3 py-1 bg-indigo-400 hover:bg-indigo-600 rounded duration-200"
                        type="submit"
                    >
                        send
                    </button>
                </form>
            </div>
        </Authenticated>
    );
}
