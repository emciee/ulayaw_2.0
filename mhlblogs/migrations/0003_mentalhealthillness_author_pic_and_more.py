# Generated by Django 5.0 on 2023-12-31 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mhlblogs', '0002_mentalhealthillness_author_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='mentalhealthillness',
            name='author_pic',
            field=models.ImageField(blank=True, null=True, upload_to='mhlblogs/mental_health_images/'),
        ),
        migrations.AlterField(
            model_name='mentalhealthillness',
            name='author',
            field=models.TextField(blank=True, default='Team BSUians'),
        ),
    ]
