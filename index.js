let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let seek_slider = document.querySelector('.seek-slider');
let volume_slider = document.querySelector('.volume-slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave  = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list =[
    {
        Img :'FB_IMG_1562981966445.jpg',
        name :'Ogo-Ola',
        artist : 'Babatunmise',
        music : 'music/Babatunmise-Ogo-Ola.mp3'  
    }
    {
        Img :'FB_IMG_1562981966445.jpg',
        name :'Close',
        artist : 'Don M.',
        music : 'music/Draw me close.mp3'  
    }
    {
        Img :'FB_IMG_1562981966445.jpg',
        name :'dimimu',
        artist : 'Babatunmise',
        music : 'music/Di-mi-mu.mp3'  
    }
]