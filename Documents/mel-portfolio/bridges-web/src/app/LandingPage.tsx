import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe2, Languages, BookOpen, Mail } from "lucide-react"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <a className="flex items-center justify-center" href="#">
                    <Globe2 className="h-6 w-6" />
                    <span className="sr-only">Linguistic Services Logo</span>
                    <span className="ml-2 text-lg font-semibold">Bridges - Linguistic and Translation</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#services">
                        Services
                    </a>
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                        About
                    </a>
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                        Contact
                    </a>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 to-green-100">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black drop-shadow-2xl">
                                    Brazilian Portuguese to English Translation Services
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Professional linguistic services with a focus on cultural nuances. UK and US English expertise.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Get a Quote</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <Languages className="h-8 w-8 mb-2" />
                                    <CardTitle>Translation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Accurate and culturally-aware translations from Brazilian Portuguese to UK and US English.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <BookOpen className="h-8 w-8 mb-2" />
                                    <CardTitle>Localization</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Adapt your content to resonate with English-speaking audiences while preserving Brazilian essence.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Globe2 className="h-8 w-8 mb-2" />
                                    <CardTitle>Cultural Consulting</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Ensure your message is culturally appropriate and effective for your target audience.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                With over a decade of experience in linguistic services, I specialize in bridging the cultural and
                                language gap between Brazil and English-speaking countries. My deep understanding of both cultures
                                ensures that your message is not just translated, but truly resonates with your audience.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
                        <form className="max-w-md mx-auto space-y-4">
                            <Input placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                            <Textarea placeholder="Your message" />
                            <Button className="w-full">
                                <Mail className="mr-2 h-4 w-4" /> Send Message
                            </Button>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Bridges Linguistics. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </a>
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </a>
                </nav>
            </footer>
        </div>
    )
}