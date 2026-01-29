export default function PlayControls(){
    return (
        <div>
            <ul className="flex justify-evenly">
                <li><button>Speed</button></li>
                <li><button>Back</button></li>
                <li><button>Play</button></li>
                <li><button>Forward</button></li>
                <li><button>Shuffle</button></li>
            </ul>
        </div>
    );
}