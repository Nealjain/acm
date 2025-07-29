import React from 'react';
import TeamCard from './TeamCard';

const TeamSection = () => {
  const teamMembers = [
    // Team member data will go here
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
