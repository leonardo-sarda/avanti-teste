"use client";
import { getUserGit } from "@/http/get-user";
import Image from "next/image";
import { useEffect, useState } from "react";
import leo from "../assets/leo.jpeg";
import user from "../assets/user.png";

type UserProps = {
	username: string;
};
export function User({ username }: UserProps) {
	const [userData, setUserData] = useState({
		name: "",
		bio: "",
		avatar_url: "",
	});

	

	console.log(userData.avatar_url);

	return (
		<div className="bg-withe-200 rounded-[25px] w-[804px] h-[257px]">
			<div className="flex justify-center items-center max-w-[700px] px-[33px] gap-8 my-[18px]">
				<Image
					src={userData.avatar_url}
					height={220}
					width={220}
					alt=""
					className="rounded-[50%] border-2 border-blue-400"
				/>
				<div className="flex flex-col w-[448px]">
					<p className="text-blue-500 font-nunito font-bold text-xl">
						{userData.name}
					</p>
					<p className="font-nunito font-[300px] text-[15px] mt-[16px]">
						{userData.bio}
					</p>
				</div>
			</div>
		</div>
	);
}
