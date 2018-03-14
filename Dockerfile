RUN apt-get -y install supervisor && \
  mkdir -p /var/log/supervisor && \
  mkdir -p /etc/supervisor/conf.d

ADD supervisor.conf /etc/supervisor.conf

CMD ["supervisord", "-c", "/etc/supervisor.conf"]