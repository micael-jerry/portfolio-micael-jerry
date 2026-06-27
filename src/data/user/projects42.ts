import { IMAGES } from "../../assets/index.ts";
import { Project42Type } from "../../types/project.type.ts";

export const PROJECTS_42: Project42Type[] = [
	{
		title: "Libft",
		circle: 0,
		description:
			"My first library of standard C functions, rewritten from scratch to understand the internals of libc.",
		descriptionKey: "projects_42.libft_desc",
		githubLink: "https://github.com/micael-jerry/libft",
		technologies: ["C", "Make"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "get_next_line",
		circle: 1,
		description:
			"A function that reads a line from a file descriptor, handling multiple file descriptors and static variables.",
		descriptionKey: "projects_42.get_next_line_desc",
		githubLink: "https://github.com/micael-jerry/get_next_line",
		technologies: ["C", "File I/O", "Memory Management"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "ft_printf",
		circle: 1,
		description: "A custom implementation of the formatted output libc function printf, supporting standard formats.",
		descriptionKey: "projects_42.ft_printf_desc",
		githubLink: "https://github.com/micael-jerry/ft_printf",
		technologies: ["C", "Variadic Functions"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "Born2beRoot",
		circle: 1,
		description:
			"Setting up a secure Debian virtual machine with strict password policies, SSH, UFW, sudo, and active monitoring scripts.",
		descriptionKey: "projects_42.born2beroot_desc",
		githubLink: "https://github.com/micael-jerry/Born2beRoot",
		technologies: ["Debian", "VirtualBox", "LVM", "Shell Scripting", "SysAdmin"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "push_swap",
		circle: 2,
		description: "A highly optimized sorting algorithm project using two stacks and a limited instruction set.",
		descriptionKey: "projects_42.push_swap_desc",
		githubLink: "https://github.com/micael-jerry/push_swap",
		technologies: ["C", "Algorithms", "Optimization", "Complexity"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "minitalk",
		circle: 2,
		description:
			"A client-server communication application using UNIX signals (SIGUSR1 and SIGUSR2) for binary data transfer.",
		descriptionKey: "projects_42.minitalk_desc",
		githubLink: "https://github.com/micael-jerry/minitalk",
		technologies: ["C", "UNIX Signals", "IPC"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "So Long",
		circle: 2,
		description:
			"A small 2D game focusing on window management, event handling (keyboard, mouse) and basic rendering with MiniLibX.",
		descriptionKey: "projects_42.solong_desc",
		githubLink: "https://github.com/micael-jerry/so_long",
		technologies: ["C", "MinilibX", "Game Loop"],
		image: IMAGES.soLongImg,
	},
	{
		title: "minishell",
		circle: 3,
		description:
			"A fully functional shell interpreter mimicking bash, with environment variables, history, paths, redirections, and pipes.",
		descriptionKey: "projects_42.minishell_desc",
		githubLink: "https://github.com/AshCript/minishell",
		technologies: ["C", "Unix API", "Parser", "Process Control"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "philosophers",
		circle: 3,
		description:
			"An implementation of the Dining Philosophers problem, learning thread synchronization, mutexes, and deadlock prevention.",
		descriptionKey: "projects_42.philosophers_desc",
		githubLink: "https://github.com/micael-jerry/philosophers",
		technologies: ["C", "POSIX Threads", "Mutexes", "Concurrency"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "Cub3d",
		circle: 4,
		description:
			"A 3D graphics game engine inspired by Wolfenstein 3D, implementing raycasting principles to render a first-person perspective.",
		descriptionKey: "projects_42.cub3d_desc",
		githubLink: "https://github.com/micael-jerry/cub3d",
		technologies: ["C", "MinilibX", "Raycasting", "Trigonometry"],
		image: IMAGES.cub3dImg,
	},
	{
		title: "NetPractice",
		circle: 4,
		description:
			"A modular, puzzle-based networking project to understand subnets, IP addressing, routing tables, and interface configurations.",
		descriptionKey: "projects_42.netpractice_desc",
		githubLink: "https://github.com/micael-jerry/net-practice",
		technologies: ["Networking", "IP Addressing", "Subnetting", "Routing"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "CPP Modules 00-04",
		circle: 4,
		description: "A series of C++ modules designed to learn Object-Oriented Programming (OOP) concepts in C++98.",
		descriptionKey: "projects_42.cpp_00_04_desc",
		githubLink: "https://github.com/micael-jerry/cpp-00-04",
		technologies: ["C++", "OOP", "Templates", "Inheritance"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "Inception",
		circle: 5,
		description:
			"A DevOps project setting up a secure multi-container infrastructure with Nginx, WordPress, and MariaDB using Docker.",
		descriptionKey: "projects_42.inception_desc",
		githubLink: "https://github.com/micael-jerry/inception",
		technologies: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB", "TLS/SSL"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "ft_irc",
		circle: 5,
		description:
			"Writing an IRC server from scratch in C++98, handling TCP sockets, select()/poll() multiplexing, and IRC protocols.",
		descriptionKey: "projects_42.ft_irc_desc",
		githubLink: "https://github.com/micael-jerry/ft_irc",
		technologies: ["C++", "Socket Programming", "TCP/IP", "Multiplexing"],
		image: IMAGES.projectDefaultImg,
	},
	{
		title: "CPP Modules 05-09",
		circle: 5,
		description: "Advanced C++ modules covering templates, STL containers, iterators, casting, and exception handling.",
		descriptionKey: "projects_42.cpp_05_09_desc",
		githubLink: "https://github.com/micael-jerry/cpp-05-09",
		technologies: ["C++", "Templates", "STL", "Exception Handling"],
		image: IMAGES.projectDefaultImg,
	},
];
