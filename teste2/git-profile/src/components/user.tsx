"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import leo from "../assets/leo.jpeg";
import user from "../assets/user.png";

type UserProps = {
	name: string;
	bio: string;
	avatar_url: string;
};

interface UserPropsRequest{
	user: UserProps;
}
export function User({ user }: UserPropsRequest) { 



	return (
		<div className="bg-withe-200 rounded-[25px] w-[804px] h-[257px]">
			<div className="flex justify-center items-center max-w-[700px] px-[33px] gap-8 my-[18px]">
				<Image
					src={user.avatar_url}
					height={220}
					width={220}
					alt=""
					className="rounded-[50%] border-2 border-blue-400"
				/>
				<div className="flex flex-col w-[448px]">
					<p className="text-blue-500 font-nunito font-bold text-xl">
						{user.name}
					</p>
					<p className="font-nunito font-[300px] text-[15px] mt-[16px]">
						{user.bio}
					</p>
				</div>
			</div>
		</div>
	);
}
