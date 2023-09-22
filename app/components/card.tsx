/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";

interface CardProps {
  match?: Match;
}

interface TeamProps {
  team?: Team;
}

interface VersusProps {
    date?: string;
}

const Team = ({ team }: TeamProps) => {
  return (
    <div className="flex flex-col w-1/2 items-center justify-center">
      <img
        src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`}
        alt={team?.name}
        className="w-[90px] h-[60px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-lg"
      />
      <p className="font-bold text-lg mt-2 text-center">{team?.name}</p>
      <p className="font-bold text-3xl text-center text-red-700">
        {team?.goals}
      </p>
    </div>
  );
};

const Versus = ({date}: VersusProps) => {
    return (
        <div className="grid relative h-full py-3">
            <span className="absolute font-bold text-2xl place-self-center">VS</span>
            <span className="font-medium text-medium place-self-end bg-black rounded-full px-3 py-1 text-white">{moment(date).format("HH:mm")}</span>
        </div>
    )
}
export default function Card({ match }: CardProps) {
  return (
    <div className="flex flex-row aspect-video border-[3px] border-black shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-lg">
      <Team team={match?.home_team} />
      <Versus date={match?.datetime}/>
      <Team team={match?.away_team} />
    </div>
  );
}
