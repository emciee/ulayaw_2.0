from django.db import models

class MentalHealthIllness(models.Model):
    name = models.CharField(max_length=255, unique=True)
    date_created = models.TextField(blank=True)
    description = models.TextField(blank=True)
    slogan = models.TextField(blank=True)
    author_pic = models.ImageField(upload_to='mhlblogs/mental_health_images/', blank=True, null=True)
    author = models.TextField(blank=True, default='Team BSUians')
    main_bg = models.ImageField(upload_to='mhlblogs/mental_health_images/', blank=True, null=True)

    symptoms_image = models.ImageField(upload_to='mhlblogs/mental_health_images/', blank=True, null=True)
    symptoms1_title = models.TextField(blank=True)
    symptoms1_description = models.TextField(blank=True)
    symptoms2_title = models.TextField(blank=True)
    symptoms2_description = models.TextField(blank=True)
    symptoms3_title = models.TextField(blank=True)
    symptoms3_description = models.TextField(blank=True)
      
    treatments_image = models.ImageField(upload_to='mhlblogs/mental_health_images/', blank=True, null=True)
    treatment1_title = models.TextField(blank=True)
    treatment1_description = models.TextField(blank=True)
    treatment2_title = models.TextField(blank=True)
    treatment2_description = models.TextField(blank=True)
    treatment3_title = models.TextField(blank=True)
    treatment3_description = models.TextField(blank=True)

    def __str__(self):
        return self.name


