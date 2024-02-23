import clsx from 'clsx';
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(...inputs))
}

/* NEED TO LEARN MORE ABOUT THESE FUNCTIONS */