"use client"
import Link from 'next/link';
import React from 'react';
import axios from 'axios'
import getData from './main/getData';
import { useRouter } from 'next/navigation';
export default function HomeMoshal() {
  const router = useRouter()
  router.push("/main/jobs")
  return (<>
  <small>Front End Development Mode</small>

  </>  );
}
