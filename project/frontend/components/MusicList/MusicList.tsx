import React from 'react';
import { useQuery } from 'react-query';
import { getMusicList } from '../../src/services/api';

interface Music {
  id: string;
  title: string;
  artist: string;
  description: string;
  price: number;
  imageUrl: string;
  level: string;
}

const MusicList: React.FC = () => {
  const { data, isLoading, error } = useQuery('music', getMusicList);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-64"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        加载课程失败，请稍后重试
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.data.map((course: Music) => (
        <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{course.artist}</p>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              {course.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-indigo-600 font-semibold">
                ¥{course.price}
              </span>
              <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded">
                {course.level}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;