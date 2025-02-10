import { Client, Account, Databases } from "appwrite"

// Initialize the Appwrite client
const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("67a99dc400202e23d936")

// Initialize Appwrite services
export const account = new Account(client)
export const databases = new Databases(client)

// Authentication functions
export const login = async (email: string, password: string) => {
  try {
    const session = await account.createEmailSession(email, password)
    if (session.$id) {
      // Get user details after successful login
      const user = await account.get()
      return { success: true, user }
    }
    return { success: false, error: "Login failed" }
  } catch (error: any) {
    console.error("Login error:", error)
    return {
      success: false,
      error: error.message || "Invalid credentials",
    }
  }
}

export const register = async (email: string, password: string, name: string) => {
  try {
    const user = await account.create("unique()", email, password, name)

    if (user.$id) {
      // Automatically log in after successful registration
      return await login(email, password)
    }
    return { success: false, error: "Registration failed" }
  } catch (error: any) {
    console.error("Registration error:", error)
    if (error.code === 409) {
      return { success: false, error: "Email already exists" }
    }
    return {
      success: false,
      error: error.message || "Registration failed. Please try again.",
    }
  }
}

export const logout = async () => {
  try {
    await account.deleteSession("current")
    return { success: true }
  } catch (error: any) {
    console.error("Logout error:", error)
    return {
      success: false,
      error: error.message || "Logout failed",
    }
  }
}

// Check if user is logged in
export const checkAuth = async () => {
  try {
    const user = await account.get()
    return { success: true, user }
  } catch {
    return { success: false, user: null }
  }
}

