import user from "./User";
import { Heart } from "@phosphor-icons/react";

export default function Footer() {
    return(
        <footer>
            <div className="flex p-6 justify-center theme-color">
                <span className="inline-flex gap-2 items-center text-sm text-opacity-50">
                    Created by {user.name} with
                    <Heart size={18} weight="fill" className="text-red-600" />
                </span>
            </div>
        </footer>
    )
}