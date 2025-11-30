import { useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoShowcase() {
    const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
    const [isPlaying, setIsPlaying] = useState<{ 1: boolean; 2: boolean }>({
        1: false,
        2: false,
    });

    const videos = [
        {
            id: 1 as const,
            src: "/andullation-therapy-demo-1.mp4",
            title: "Demonstrație Terapie Andullation - Partea 1",
            description: "Prezentarea dispozitivului medical și a tehnologiei de vibrații multidirecționale",
        },
        {
            id: 2 as const,
            src: "/andullation-therapy-demo-2.mp4",
            title: "Demonstrație Terapie Andullation - Partea 2",
            description: "Aplicare practică și beneficiile terapiei Andullation",
        },
    ];

    const togglePlay = (videoId: 1 | 2) => {
        const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
        if (video) {
            if (isPlaying[videoId]) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying({ ...isPlaying, [videoId]: !isPlaying[videoId] });
        }
    };

    return (
        <div className="relative">
            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 mb-8">
                {videos.map((video) => (
                    <button
                        key={video.id}
                        onClick={() => setActiveVideo(video.id)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeVideo === video.id
                                ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg scale-105"
                                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                            }`}
                    >
                        <span className="flex items-center gap-2">
                            <span className="text-xl">🎥</span>
                            Video {video.id}
                        </span>
                    </button>
                ))}
            </div>

            {/* Video Players */}
            <div className="relative">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className={`transition-all duration-500 ${activeVideo === video.id
                                ? "opacity-100 relative"
                                : "opacity-0 absolute top-0 left-0 w-full pointer-events-none"
                            }`}
                    >
                        {/* Video Title & Description */}
                        <div className="mb-4 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h3>
                            <p className="text-gray-600">{video.description}</p>
                        </div>

                        {/* Video Container */}
                        <div className="relative group">
                            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <video
                                    id={`video-${video.id}`}
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                    onPlay={() => setIsPlaying({ ...isPlaying, [video.id]: true })}
                                    onPause={() => setIsPlaying({ ...isPlaying, [video.id]: false })}
                                    poster={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23111827' width='1920' height='1080'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='48' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${video.title}%3C/text%3E%3C/svg%3E`}
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Browserul tău nu suportă redarea video-ului.
                                </video>
                            </div>

                            {/* Custom Play Button Overlay */}
                            {!isPlaying[video.id] && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl cursor-pointer transition-opacity duration-300 hover:bg-black/30"
                                    onClick={() => togglePlay(video.id)}
                                >
                                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110">
                                        <Play className="w-10 h-10 text-blue-600 ml-1" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Video Info Cards */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Tehnologie Medicală Certificată</div>
                                        <div className="text-sm text-gray-600">Dispozitiv fabricat în Germania</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Rezultate Vizibile</div>
                                        <div className="text-sm text-gray-600">Din primele ședințe</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
