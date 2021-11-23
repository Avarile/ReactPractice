import React, { useState, useEffet } from 'react'
import axios from 'axios'

export const useRequest = (
  url,
  defaultValue,
  prepareData = data => data
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(defaultValue)
  