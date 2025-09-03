'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, Grid } from '@mui/material';
import AdminHeader from '@/components/layout/AdminHeader';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addPuja } from '@/store/slices/pujaSlice';
import { PujaCard } from '@/types';

export default function AddPujaPage() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: '',
    temple: '',
    description: '',
    date: '',
    image: '',
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const newPuja: PujaCard = {
      id: Date.now().toString(),
      ...formData,
      isNew: true,
    };

    dispatch(addPuja(newPuja));
    
    // Reset form
    setFormData({
      title: '',
      temple: '',
      description: '',
      date: '',
      image: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Card sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom className="text-center mb-6">
            Add New Puja
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Puja Title"
                  value={formData.title}
                  onChange={handleInputChange('title')}
                  required
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Temple Name"
                  value={formData.temple}
                  onChange={handleInputChange('temple')}
                  required
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  value={formData.description}
                  onChange={handleInputChange('description')}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  value={formData.date}
                  onChange={handleInputChange('date')}
                  required
                  variant="outlined"
                  placeholder="e.g., Thursday, 30 Aug, 2025"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Image URL"
                  value={formData.image}
                  onChange={handleInputChange('image')}
                  required
                  variant="outlined"
                  placeholder="e.g., /images/puja1.png"
                />
              </Grid>
              
              <Grid item xs={12}>
                <Box className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outlined"
                    size="large"
                    onClick={() => setFormData({
                      title: '',
                      temple: '',
                      description: '',
                      date: '',
                      image: '',
                    })}
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ 
                      bgcolor: '#f37335',
                      '&:hover': { bgcolor: '#d84f0d' }
                    }}
                  >
                    Add Puja
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
    </div>
  );
}