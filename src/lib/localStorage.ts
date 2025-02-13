interface TeamMember {
    id: string
    name: string
    role: string
    avatar: string
    bio?: string
    skills?: string[]
  }
  
  export interface Team {
    $id: string
    name: string
    members: TeamMember[]
    project: string
    description: string
    techStack: string[]
    progress?: number
    githubLink?: string
    demoLink?: string
  }
  
  // Initial teams data
  const initialTeams: Team[] = [
    {
      $id: "1",
      name: "HealthTech Innovators",
      members: [
        {
          id: "1",
          name: "John Doe",
          role: "Full Stack Developer",
          avatar: "/placeholder.svg?height=80&width=80",
          bio: "Experienced developer with a passion for healthcare innovation",
          skills: ["React", "Node.js", "Python", "AWS"],
        },
        {
          id: "2",
          name: "Jane Smith",
          role: "UI/UX Designer",
          avatar: "/placeholder.svg?height=80&width=80",
          bio: "Creative designer focused on creating intuitive healthcare interfaces",
          skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
        },
      ],
      project: "AI-Powered Health Monitoring",
      description: "Developing an AI system for early disease detection using wearable data.",
      techStack: ["React", "Python", "TensorFlow", "AWS", "Docker"],
      progress: 75,
      githubLink: "https://github.com/healthtech-innovators",
      demoLink: "https://demo.healthtech-innovators.com",
    },
    // Add more initial teams as needed
  ]
  
  // Function to get all teams
  export const getAllTeams = (): Team[] => {
    const teamsData = localStorage.getItem("teams")
    if (!teamsData) {
      localStorage.setItem("teams", JSON.stringify(initialTeams))
      return initialTeams
    }
    return JSON.parse(teamsData)
  }
  
  // Function to get a team by ID
  export const getTeamById = (id: string): Team | undefined => {
    const teams = getAllTeams()
    return teams.find((team) => team.$id === id)
  }
  
  // Function to get a team by name
  export const getTeamByName = (name: string): Team | undefined => {
    const teams = getAllTeams()
    return teams.find((team) => team.name.toLowerCase() === name.toLowerCase())
  }
  
  // Function to add a new team
  export const addTeam = (team: Omit<Team, "$id">): Team => {
    const teams = getAllTeams()
    const newTeam = {
      ...team,
      $id: Math.random().toString(36).substr(2, 9),
    }
    teams.push(newTeam)
    localStorage.setItem("teams", JSON.stringify(teams))
    return newTeam
  }
  
  // Function to update user's team association
  export const setUserTeam = (email: string, teamName: string) => {
    localStorage.setItem(`user_team_${email}`, teamName)
  }
  
  // Function to get user's team
  export const getUserTeam = (email: string): string | null => {
    return localStorage.getItem(`user_team_${email}`)
  }
  
  